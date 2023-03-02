import { LocalStorageProtocol } from '@/protocols/cache/local_cache';
import { StorageKeysEnum, TipoPersonaEnum } from '@/utilities/enums';
import { IProduct } from '@/web_services/verum/domain/models/product.model';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const localStorage = new LocalStorageProtocol();

export interface CartState {
    total: number,
    subtotal: number,
    impuesto: number,
    quantity: number,
    products: IProduct[],
    open?: boolean,
}


function getCartFormLocalStorage(): CartState {
    const cart = localStorage.get(StorageKeysEnum.cart);
    console.log('cart (localStroage): ', cart);
    if (cart === null)
        return {
            total: 0,
            subtotal: 0,
            quantity: 0,
            impuesto: 0,
            products: [],
            open: false,
        };
    return cart as CartState;
}

export const CartEmptyState: CartState = getCartFormLocalStorage();



export const cartSlice = createSlice({
    name: 'cart',
    initialState: CartEmptyState,
    reducers: {

        addToCart: (state: CartState, { payload }: PayloadAction<IProduct>) => {
            console.log(state)
            const isTheSameCertificado = state.products.filter(product =>
                product.razonSocial === payload.razonSocial && (product.tipoPersona === payload.tipoPersona)
            );

            const isTheSameServicio = state.products.filter(product =>
                product.tipoServicio !== undefined && product.tipoServicio === payload.tipoServicio);


            if (isTheSameCertificado.length !== 0 && payload.razonSocial) return;

            if (isTheSameServicio.length !== 0) return;

            if (payload.category === 'servicio') {

                state.subtotal += payload.priceBeforeIVA ? payload.priceBeforeIVA : 0;
                state.impuesto += payload.IVA ? payload.IVA : 0
            }
            else {
                state.subtotal = state.subtotal + payload.price;
            }


            state.products = [...state.products, payload];
            state.total = state.subtotal + state.impuesto;
            state.quantity = state.products.length;

            localStorage.set(StorageKeysEnum.cart, state);
        },

        removeOfCart: (state: CartState, { payload }: PayloadAction<IProduct>) => {
            console.log(state)

            if (payload.category === 'servicio') {
                state.subtotal -= payload.priceBeforeIVA ? payload.priceBeforeIVA : 0;
                state.impuesto -= payload.IVA ? payload.IVA : 0
            }
            else {
                state.subtotal = state.subtotal - payload.price;
            }

            state.total = state.subtotal + state.impuesto
            if (payload.category === 'servicio') {
                state.products = [...state.products.filter(certificate => certificate.tipoServicio !== payload.tipoServicio)];

            }
            // else if(payload.tipoServicio === 'Verificación Empresarial'){

            // }

            else {
                state.products = [...state.products.filter(certificate => certificate.razonSocial !== payload.razonSocial)];
            }
            state.quantity = state.products.length;

            if (state.products.length === 0) {
                state.total = 0;
                state.subtotal = 0;
                state.impuesto = 0;
            }

            localStorage.set(StorageKeysEnum.cart, state);
        },

        clearCart: (state: CartState) => {
            console.log('carrito borrado');
            localStorage.delete(StorageKeysEnum.cart);
            return {
                total: 0,
                subtotal: 0,
                quantity: 0,
                impuesto: 0,
                products: [],
                open: false,
            };
        },

        openCloseCart: (state: CartState, { payload }: PayloadAction<boolean>) => {
            if (payload) {
                state.open = true;
            }
            else {
                state.open = false;
            }

            localStorage.set(StorageKeysEnum.cart, state);
        },
    }
});

export const { addToCart, removeOfCart, clearCart, openCloseCart } = cartSlice.actions;

export default cartSlice.reducer;
