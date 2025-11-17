function formatMoney(amount) {
    return "₹ " + amount.toLocaleString("en-IN");
}

function popup(msg) {
    alert(msg);
}

function redirect(url) {
    window.location.href = url;
}
