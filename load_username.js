window.onload = function ()
    {
        const urlParams = new URLSearchParams(window.location.search);
        const username = urlParams.get("uname");
        if (username)
        {
            document.getElementById("userDisplay").innerText = decodeURIComponent(username);
        }
    }