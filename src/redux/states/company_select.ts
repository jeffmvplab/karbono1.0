import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICompany } from '@/web_services/verum/domain/models/company.model';


export interface CompanySelectState {
   company: ICompany | null,
}



export const companySelectSliceInitialState: CompanySelectState = {
    company: null
};



export const companySelectSlice = createSlice({
    name: 'company_selected',
    initialState: companySelectSliceInitialState,
    reducers: {
        changeCompanySelected: (state: CompanySelectState, { payload }: PayloadAction<ICompany>) => {   
            state.company = payload;
        },
    }
});

export const { changeCompanySelected } = companySelectSlice.actions;

export default companySelectSlice.reducer;
