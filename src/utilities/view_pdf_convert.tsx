import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const convertirAPDF = async(idView:string, titlePdf:string) => {
   
    const content = document.getElementById(idView); // Reemplaza con el ID de tu vista

    if (content) {
      html2canvas(content).then((canvas) => {
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgData = canvas.toDataURL('image/png');
        pdf.addImage(imgData, 'PNG', 0, 0, 210, 297); // Ajusta el tamaño según tus necesidades
        pdf.save(`${titlePdf}.pdf`);
      });
    }
  };