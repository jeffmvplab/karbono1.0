import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const convertirAPDF = async(idView:string, titlePdf:string) => {
   
    const content = document.getElementById(idView); // Reemplaza con el ID de tu vista

    if (content) {
        // Ajusta estos valores según tus necesidades
        const zoomFactor = window.devicePixelRatio;
        const pdfOptions: any = {
          unit: 'mm',
          format: 'a4',
          orientation: 'portrait',
        };
  
        const pdf = new jsPDF(pdfOptions);
  
        html2canvas(content, {
          scale: 1 / zoomFactor, // Ajusta la escala para mejorar la calidad
          useCORS: true, // Permite cargar imágenes externas
        }).then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          
          // Ajusta estos valores según tus necesidades
          const margin = 10;
          const imageWidth = 190; // Ajusta el ancho de la imagen según el tamaño del papel
          const imageHeight = (canvas.height * imageWidth) / canvas.width;
  
          pdf.addImage(imgData, 'PNG', margin, margin, imageWidth, imageHeight);
          pdf.save(`${titlePdf}.pdf`);
        });
      }
  };