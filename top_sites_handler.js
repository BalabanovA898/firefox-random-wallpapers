(async () => {const top_sites = await browser.topSites.get();
    const container = document.querySelector(".centered-container");
    top_sites.forEach(element => {
       const new_link = document.createElement("div");
       new_link.className = "site-link";
       const text = document.createElement("p");
       text.innerText = element.title;
       const icon = document.createElement("img");
       icon.src = `https://www.google.com/s2/favicons?domain=${element.url}`;
       new_link.onclick = () => window.location = element.url;
       new_link.appendChild(icon);
       new_link.appendChild(text);
       container.appendChild(new_link);
    });
})()