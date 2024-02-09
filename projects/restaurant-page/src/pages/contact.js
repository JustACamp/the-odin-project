// module for updating the contact page

function contactPage() {
    const body = document.body;
    const content = document.getElementById('content');
    content.className = "";
    const biz = document.createElement('div');
    biz.setAttribute("id","businessName");
    biz.textContent = "Here is our contact information";
    const number = document.createElement('p');
    number.textContent = ("8675309\n Victoria");
    content.appendChild(biz);
    content.appendChild(number);
}

export default contactPage