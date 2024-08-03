
import jsPDF from "jspdf";
import { Get_font_th } from "./pdf_font";

function Examplereport(params) {
    const doc = new jsPDF("p", "mm", "a4");

    doc.addFileToVFS("THSarabunNew.ttf", Get_font_th());
    doc.addFont("THSarabunNew.ttf", "THSarabunNew", "bold");
    doc.setFont("THSarabunNew", 'bold');

    let hpage = 10, page = 1, sum = 0 , total_Sum = 0;

    doc.rect(10, hpage, 190 * 0.1, 10)
    doc.text(10 + ((190 * 0.1) / 2), hpage + (10 / 2), 'No', 'center')

    doc.rect(10 + (190 * 0.1), hpage, 190 * 0.1, 10)
    doc.text(10 + ((190 * 0.1) + (190 * 0.1) / 2), hpage + (10 / 2), 'customer', 'center')

    doc.rect(10 + ((190 * 0.1) + (190 * 0.1)), hpage, 190 * 0.1, 10)
    doc.text(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) / 2), hpage + (10 / 2), 'item', 'center')

    doc.rect(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1)), hpage, 190 * 0.2, 10)
    doc.text(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) + (190 * 0.2) / 2), hpage + (10 / 2), 'price', 'center')

    doc.rect(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) + (190 * 0.2)), hpage, 190 * 0.2, 10)
    doc.text(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) + (190 * 0.2) + (190 * 0.2) / 2), hpage + (10 / 2), 'product', 'center')

    doc.rect(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) + (190 * 0.2) + (190 * 0.2)), hpage, 190 * 0.2, 10)
    doc.text(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) + (190 * 0.2) + (190 * 0.2) + (190 * 0.2) / 2), hpage + (10 / 2), 'sum', 'center')


    const customers = [];      
    for (let index = 0; index < params.length - 50; index++) {
        if (index == 0) {
            customers.push(params[index].customer)
        }
        else if (index > 0) {
            let check = false      
            for (let j = 0; j < customers.length; j++) {
                console.log(customers[j] + ` : ${index} : ` + params[index].customer);
                if(String(customers[j]) == String(params[index].customer)){
                    check = true
                    break;
                }
            }
            if(check === false){
                customers.push(params[index].customer)
            }
        }
    }
    console.log(customers.length);

    for (let index = 0; index < params.length; index++) {
        const element = params[index];
        if (hpage > 260) {
            doc.addPage()
            hpage = 10;

            doc.rect(10, hpage, 190 * 0.1, 10)
            doc.text(10 + ((190 * 0.1) / 2), hpage + (10 / 2), 'No', 'center')

            doc.rect(10 + (190 * 0.1), hpage, 190 * 0.1, 10)
            doc.text(10 + ((190 * 0.1) + (190 * 0.1) / 2), hpage + (10 / 2), 'customer', 'center')

            doc.rect(10 + ((190 * 0.1) + (190 * 0.1)), hpage, 190 * 0.1, 10)
            doc.text(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) / 2), hpage + (10 / 2), 'item', 'center')

            doc.rect(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1)), hpage, 190 * 0.2, 10)
            doc.text(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) + (190 * 0.2) / 2), hpage + (10 / 2), 'price', 'center')

            doc.rect(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) + (190 * 0.2)), hpage, 190 * 0.2, 10)
            doc.text(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) + (190 * 0.2) + (190 * 0.2) / 2), hpage + (10 / 2), 'product', 'center')

            doc.rect(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) + (190 * 0.2) + (190 * 0.2)), hpage, 190 * 0.2, 10)
            doc.text(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) + (190 * 0.2) + (190 * 0.2) + (190 * 0.2) / 2), hpage + (10 / 2), 'sum', 'center')

        }
        hpage += 10;
        if (index % 2 == 0) {
            doc.setFillColor(255, 204, 204)
            doc.setDrawColor(0, 0, 0)
            doc.rect(10, hpage, 190 * 0.1, 10, 'DF')
            doc.text(10 + ((190 * 0.1) / 2), hpage + (10 / 2), `${index + 1}`, 'center')

            doc.setFillColor(255, 204, 204)
            doc.setDrawColor(0, 0, 0)
            doc.rect(10 + (190 * 0.1), hpage, 190 * 0.1, 10, 'DF')
            doc.text(10 + ((190 * 0.1) + (190 * 0.1) / 2), hpage + (10 / 2), element.customer, 'center')

            doc.setFillColor(255, 204, 204)
            doc.setDrawColor(0, 0, 0)
            doc.rect(10 + ((190 * 0.1) + (190 * 0.1)), hpage, 190 * 0.1, 10, 'DF')
            doc.text(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) / 2), hpage + (10 / 2), element.item.toString(), 'center')

            doc.setFillColor(255, 204, 204)
            doc.setDrawColor(0, 0, 0)
            doc.rect(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1)), hpage, 190 * 0.2, 10, 'DF')
            doc.text(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) + (190 * 0.2) / 2), hpage + (10 / 2), element.price.toString(), 'center')

            doc.setFillColor(255, 204, 204)
            doc.setDrawColor(0, 0, 0)
            doc.rect(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) + (190 * 0.2)), hpage, 190 * 0.2, 10, 'DF')
            doc.text(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) + (190 * 0.2) + (190 * 0.2) / 2), hpage + (10 / 2), element.product.toString(), 'center')

            let total = Number(element.price) * Number(element.item);
            doc.setFillColor(255, 204, 204)
            doc.setDrawColor(0, 0, 0)
            doc.rect(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) + (190 * 0.2) + (190 * 0.2)), hpage, 190 * 0.2, 10, 'DF')
            doc.text(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) + (190 * 0.2) + (190 * 0.2) + (190 * 0.2) / 2), hpage + (10 / 2), total.toString(), 'center')
            total_Sum += Number(total.toString())
        }
        else {
            doc.rect(10, hpage, 190 * 0.1, 10)
            doc.text(10 + ((190 * 0.1) / 2), hpage + (10 / 2), `${index + 1}`, 'center')

            doc.rect(10 + (190 * 0.1), hpage, 190 * 0.1, 10)
            doc.text(10 + ((190 * 0.1) + (190 * 0.1) / 2), hpage + (10 / 2), element.customer, 'center')

            doc.rect(10 + ((190 * 0.1) + (190 * 0.1)), hpage, 190 * 0.1, 10)
            doc.text(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) / 2), hpage + (10 / 2), element.item.toString(), 'center')

            doc.rect(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1)), hpage, 190 * 0.2, 10)
            doc.text(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) + (190 * 0.2) / 2), hpage + (10 / 2), element.price.toString(), 'center')

            doc.rect(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) + (190 * 0.2)), hpage, 190 * 0.2, 10)
            doc.text(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) + (190 * 0.2) + (190 * 0.2) / 2), hpage + (10 / 2), element.product.toString(), 'center')

            let total = Number(element.price) * Number(element.item);
            doc.rect(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) + (190 * 0.2) + (190 * 0.2)), hpage, 190 * 0.2, 10)
            doc.text(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) + (190 * 0.2) + (190 * 0.2) + (190 * 0.2) / 2), hpage + (10 / 2), total.toString(), 'center')
            total_Sum += Number(total.toString())
        }
        sum += Number(element.price)
    }

    doc.rect(10, hpage, 190 * 0.1, 10)
    doc.text(10, hpage + (190 / 0.1), 'customer')
    doc.rect(10 + (190 * 0.1), hpage, 190 * 0.2, 10)


    hpage += 10
    doc.rect(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1)), hpage, 190 * 0.2, 10)
    doc.text(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) + (190 * 0.2) / 2), hpage + (10 / 2), String(sum) , 'center')


    doc.rect(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) + (190 * 0.2) + (190 * 0.2)), hpage, 190 * 0.2, 10)
    doc.text(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) + (190 * 0.2) + (190 * 0.2) + (190 * 0.2) / 2), hpage + (10 / 2), String(Number(total_Sum.toString()) / customers.length), 'center')

    window.open(doc.output('bloburl'))

}
export default Examplereport;