import { PrescriptionsUseCases } from '@/domain/usecases/prescriptions.usecases';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const prescriptionsUseCase = new PrescriptionsUseCases();

export const convertirAPDF = async (idView: string, titlePdf: string, no_orden?: number, rol?: string) => {
  console.log('ROL_PDF VIEW:', rol, 'titlePdf:', titlePdf, 'no_orden', no_orden, 'idView', idView);

  const content = document.getElementById(idView);

  if (!content) {
    console.error('No se encontró el elemento con id:', idView);
    return;
  }
  

  // Ajusta la escala para mejorar la calidad
  const zoomFactor = window.devicePixelRatio ||0.1;
  const canvas = await html2canvas(content, {
    scale: zoomFactor, // Mejora la calidad de la captura
    useCORS: true, // Permite cargar imágenes externas
    scrollX: 0,
    scrollY: 0,
    width: content.scrollWidth, // Asegura capturar el ancho completo
    height: content.scrollHeight, // Asegura capturar el alto completo
  });

  const imgData = canvas.toDataURL('image/png');

  // Dimensiones del PDF en mm
  let pdfWidth: number;
  let pdfHeight: number;

  if (idView === 'etiqueta_view') {
    // Para 'etiqueta_view', usamos 150x100 mm
    pdfHeight = 150; // Alto en mm
    pdfWidth = 100;  // Ancho en mm
  } else if (idView === 'reporte_view') {
    // Para 'reporte_view', mantenemos 210x295 mm
    pdfWidth = 210;
    pdfHeight = 295;
  } else {
    // Otros casos, usamos 210x350 mm
    pdfWidth = 210;
    pdfHeight = 350;
  }

  // Crea el PDF
  const pdf = new jsPDF({
    unit: 'mm',
    format: [pdfWidth, pdfHeight],
    orientation: 'portrait',
    compress: true,
  });

  // Dimensiones del canvas en píxeles
  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;

  if (idView === 'etiqueta_view') {
    // Escalar proporcionalmente para 'etiqueta_view'
    const aspectRatio = canvasHeight / canvasWidth;

    // Ajustar la imagen para que quepa en 150x100 mm manteniendo la relación de aspecto
    let imgWidth = pdfWidth; // Ancho máximo del PDF
    let imgHeight = imgWidth * aspectRatio; // Alto proporcional

    if (imgHeight > pdfHeight) {
      // Si el alto excede el límite, ajustamos basado en el alto
      imgHeight = pdfHeight;
      imgWidth = imgHeight / aspectRatio;
    }

    // Agregar la imagen al PDF (sin recorte, escalada completa)
    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

  } else {
    // Lógica para otros casos (múltiples páginas si es necesario)
    const imgWidth = pdfWidth; // Ancho del PDF
    const imgHeight = (canvasHeight * imgWidth) / canvasWidth; // Alto proporcional
    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pdfHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;
    }
  }

  // Guardar el PDF
  pdf.save(`${titlePdf}.pdf`);

  // Enviar el PDF si el rol es 'Prescriptor'
  if (rol === 'Prescriptor') {
    const pdfBlob = pdf.output('blob');
    const file = new File([pdfBlob], `${titlePdf}.pdf`, { type: 'application/pdf' });

    const resp = await prescriptionsUseCase.sendPDF(file, no_orden?.toString()!, titlePdf);
    console.log('Respuesta de sendPDF:', resp);
  }
};