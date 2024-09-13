import { PrescriptionsUseCases } from '@/domain/usecases/prescriptions.usecases';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const prescriptionsUseCase = new PrescriptionsUseCases();

export const convertirAPDF = async (idView: string, titlePdf: string, no_orden?: number, rol?: string) => {
  console.log('ROL_PDF VIEW:', rol, 'titlePdf:', titlePdf, 'no_orden', no_orden, 'idView', idView);

  const content = document.getElementById(idView);

  if (content) {
    // Ajusta la escala para mejorar la calidad y ajustar el tamaño del canvas
    const zoomFactor = window.devicePixelRatio || 1;
    const canvas = await html2canvas(content, {
      scale: zoomFactor, // Ajusta la escala para mejorar la calidad
      useCORS: true, // Permite cargar imágenes externas
      scrollX: 0,
      scrollY: 0,
    });

    const imgData = canvas.toDataURL('image/png');

    // Crea un PDF en formato A4, que puede manejar múltiples páginas si es necesario
    const pdf = new jsPDF({
      unit: 'mm',
      // format: 'a4',
      format: idView === 'reporte_view' ? [210, 295] : [210, 350],
      orientation: 'portrait',
      compress: true
    });

    const imgWidth = 210; // A4 width in mm
    // const pageHeight = 295; // A4 height in mm
    const pageHeight = idView === 'reporte_view' ? 295 : 350; // A4 height in mm

    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;

    let position = 0;

    // Agrega la imagen al PDF, ajustando a múltiples páginas si es necesario
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save(`${titlePdf}.pdf`);

    if (rol === 'Prescriptor') {
      const pdfBlob = pdf.output('blob');
      const file = new File([pdfBlob], `${titlePdf}.pdf`, { type: 'application/pdf' });

      const resp = await prescriptionsUseCase.sendPDF(file, no_orden?.toString()!, titlePdf);
      console.log('Respuesta de sendPDF:', resp);
    }
  }
};
