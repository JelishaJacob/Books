function addBook() {
    bookid = bid.value
    bookname = bname.value
    authname = aname.value
    bookdscrp = bdscr.value
    if (bookname in localStorage) {
        alert("Book Already added")
        window.location = "index.html"
    }
    else {
        book = { bookid, bookname, authname, bookdscrp }
        localStorage.setItem(bookname, JSON.stringify(book))
        alert("Book Added Succesfully")
        window.location = "index.html"
    }
}

function searchPage() {
    window.location = 'search.html'
}

function search() {
    bookname = sbname.value
    if (bookname in localStorage) {
        bookObj = JSON.parse(localStorage.getItem(bookname))
        d1.innerHTML = `<p class="container" style="background-color:rgb(100, 164, 228); width:100%; border-radius:10px;text-align:left;color:white;">
                Book Name:${bookObj.bookname}<br>
                Author Name:${bookObj.authname}<br>
                Book Description:${bookObj.bookdscrp}<br>
            </p>`
    }
    else {
        d1.innerHTML = `<p style="color:red">BOOK NOT FOUND!!</p>`
    }
}

function back() {
    window.location = 'index.html'
}