const tags = ["waifu", "neko", "shinobu", "megumin", "bully", "cuddle", "cry", "hug", "awoo", "kiss", "pat", "smug", "bonk", "yeet", "blush", "smile", "wave", "highfive", "handhold", "nom", "bite", "glomp", "slap", "kill", "happy", "wink", "poke", "dance", "cringe"];

const get_random_int = (min, max) => Math.floor(Math.random() * (max - min)) + min;

(async() => {
    const result = await fetch(`https://api.waifu.pics/sfw/${tags[get_random_int(0, 27)]}`, {
        method: 'GET',
});
    const img_url = await result.json();
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundImage = `url(${img_url.url})`;
})();
        
