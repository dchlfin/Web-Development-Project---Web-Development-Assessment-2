/*****Soup *****/
document.getElementById('soup1').addEventListener('click', () => { /* when user clicks soup1, */
    const soupDiv = document.getElementById('soup'); /* js gets the soup ID circle to place the image in */ 
    soupDiv.textContent = ''; /* clears the soup label */ 

    const img = document.createElement('img'); /* creates a new <img> element in memory */ 
    img.src = 'https://www.dropbox.com/scl/fi/a87z2tujsy0whetg6ea11/soup1.png?rlkey=gmk71bp6tth3b7lht6kogvs2i&e=1&st=hob770xl&raw=1'; /* specifies the image source */ 
    img.className = 'food-image'; /* styles the image into the circle with the specified CSS class */

    img.onerror = () => { /* debugger */ 
        console.error("Image upload failed.")
        soupDiv.textContent = 'Image missing!';
    };

    soupDiv.appendChild(img); /* adds the image on the 'soup' div / circle  */ 
});

document.getElementById('soup2').addEventListener('click', () => {
    const soupDiv = document.getElementById('soup');
    soupDiv.textContent = '';

    const img = document.createElement('img');
    img.src = 'https://www.dropbox.com/scl/fi/a1mr4760clop3vh7i2k04/soup2.png?rlkey=t36ems5lakcp44c2l9mhxpko2&e=1&st=zz7sess1&raw=1';
    img.className = 'food-image';

    img.onerror = () => {
        console.error("Image upload failed.")
        soupDiv.textContent = 'Image missing!';
    };

    soupDiv.appendChild(img);
});

document.getElementById('soup3').addEventListener('click', () => {
    const soupDiv = document.getElementById('soup');
    soupDiv.textContent = '';

    const img = document.createElement('img');
    img.src = 'https://www.dropbox.com/scl/fi/y1g89eek6cdb8evthkce9/soup3.png?rlkey=wf60xwtt8535kf9b0neom3nyi&st=logbl0rd&raw=1';
    img.className = 'food-image';

    img.onerror = () => {
        console.error("Image upload failed.")
        soupDiv.textContent = 'Image missing!';
    };

    soupDiv.appendChild(img);
});

/***** Rice  *****/
document.getElementById('rice1').addEventListener('click', () => {
    const soupDiv = document.getElementById('rice');
    soupDiv.textContent = '';

    const img = document.createElement('img');
    img.src = 'https://www.dropbox.com/scl/fi/7otjtxu0boz6d2b0s41mo/rice1.png?rlkey=q6bp8wn1whu07iqou6yi42je4&e=1&st=em55b6wy&raw=1';
    img.className = 'food-image';

    img.onerror = () => {
        console.error("Image upload failed.")
        soupDiv.textContent = 'Image missing!';
    };

    soupDiv.appendChild(img);
});

document.getElementById('rice2').addEventListener('click', () => {
    const soupDiv = document.getElementById('rice');
    soupDiv.textContent = '';

    const img = document.createElement('img');
    img.src = 'https://www.dropbox.com/scl/fi/u5shgj3047cerzj4ui1zh/rice2.png?rlkey=bxelimgbpfu36ecmb0mtmjm4e&e=1&st=apinsda7&raw=1';
    img.className = 'food-image';

    img.onerror = () => {
        console.error("Image upload failed.")
        soupDiv.textContent = 'Image missing!';
    };

    soupDiv.appendChild(img);
});

document.getElementById('rice3').addEventListener('click', () => {
    const soupDiv = document.getElementById('rice');
    soupDiv.textContent = '';

    const img = document.createElement('img');
    img.src = 'https://www.dropbox.com/scl/fi/6el2ngy2aiqj9km63b7n6/rice3.png?rlkey=ulbs2rier4yp85cph6wjqgxzg&e=1&st=p75jz1xa&raw=1';
    img.className = 'food-image';

    img.onerror = () => {
        console.error("Image upload failed.")
        soupDiv.textContent = 'Image missing!';
    };

    soupDiv.appendChild(img);
});

/***** Main Dish *****/
document.getElementById('md1').addEventListener('click', () => {
    const soupDiv = document.getElementById('main-dish');
    soupDiv.textContent = '';

    const img = document.createElement('img');
    img.src = 'https://www.dropbox.com/scl/fi/cjs6vc8v5miigh2ajj3hg/md1.png?rlkey=a4embvqwgja2eq4fs345fgr9s&e=1&st=8tfyw557&raw=1';
    img.className = 'food-image';

    img.onerror = () => {
        console.error("Image upload failed.")
        soupDiv.textContent = 'Image missing!';
    };

    soupDiv.appendChild(img);
});

document.getElementById('md2').addEventListener('click', () => {
    const soupDiv = document.getElementById('main-dish');
    soupDiv.textContent = '';

    const img = document.createElement('img');
    img.src = 'https://www.dropbox.com/scl/fi/3a774bv5u4aouxym0eh4w/md2.png?rlkey=51kqrgyacxjibkbz1lkulo4q2&e=1&st=0c0q87gj&raw=1';
    img.className = 'food-image';

    img.onerror = () => {
        console.error("Image upload failed.")
        soupDiv.textContent = 'Image missing!';
    };

    soupDiv.appendChild(img);
});

document.getElementById('md3').addEventListener('click', () => {
    const soupDiv = document.getElementById('main-dish');
    soupDiv.textContent = '';

    const img = document.createElement('img');
    img.src = 'https://www.dropbox.com/scl/fi/34n79106yxbwyfm7yx0hx/md3.png?rlkey=jigybjjin778piv5pavxcd8q9&e=1&st=8qtolqdn&raw=1';
    img.className = 'food-image';

    img.onerror = () => {
        console.error("Image upload failed.")
        soupDiv.textContent = 'Image missing!';
    };

    soupDiv.appendChild(img);
});

/***** Side Dish *****/
document.getElementById('sd1').addEventListener('click', () => {
    const soupDiv = document.getElementById('side-dish');
    soupDiv.textContent = '';

    const img = document.createElement('img');
    img.src = 'https://www.dropbox.com/scl/fi/xy79151t9xmx3n0fqkypk/sd1.png?rlkey=amqdyotzxxbbcc6d5tylvet43&e=1&st=10oo7iew&raw=1';
    img.className = 'food-image';

    img.onerror = () => {
        console.error("Image upload failed.")
        soupDiv.textContent = 'Image missing!';
    };

    soupDiv.appendChild(img);
});

document.getElementById('sd2').addEventListener('click', () => {
    const soupDiv = document.getElementById('side-dish');
    soupDiv.textContent = '';

    const img = document.createElement('img');
    img.src = 'https://www.dropbox.com/scl/fi/e6f0a6bhch28wmzeckeff/sd2.png?rlkey=6pf4xbhgwydvd69kporpounnw&e=1&st=j237s5r7&raw=1';
    img.className = 'food-image';

    img.onerror = () => {
        console.error("Image upload failed.")
        soupDiv.textContent = 'Image missing!';
    };

    soupDiv.appendChild(img);
});

document.getElementById('sd3').addEventListener('click', () => {
    const soupDiv = document.getElementById('side-dish');
    soupDiv.textContent = '';

    const img = document.createElement('img');
    img.src = 'https://www.dropbox.com/scl/fi/u88j2i89nfz43d4wgja8j/sd3.png?rlkey=onj346gzkoqpfnvanfm2ew07i&e=1&st=385zxi3m&raw=1';
    img.className = 'food-image';

    img.onerror = () => {
        console.error("Image upload failed.")
        soupDiv.textContent = 'Image missing!';
    };

    soupDiv.appendChild(img);
});

/***** Pickles *****/
document.getElementById('p1').addEventListener('click', () => {
    const soupDiv = document.getElementById('pickles');
    soupDiv.textContent = '';

    const img = document.createElement('img');
    img.src = 'https://www.dropbox.com/scl/fi/vqtvupg9qnmcvh1k7x3ti/p1.png?rlkey=ahncfmgjyh6oiof3woqj3vx76&e=1&st=4q5y7oyb&raw=1';
    img.className = 'food-image';

    img.onerror = () => {
        console.error("Image upload failed.")
        soupDiv.textContent = 'Image missing!';
    };

    soupDiv.appendChild(img);
});

document.getElementById('p2').addEventListener('click', () => {
    const soupDiv = document.getElementById('pickles');
    soupDiv.textContent = '';

    const img = document.createElement('img');
    img.src = 'https://www.dropbox.com/scl/fi/i0eq12wbvjhbbzrbxhmj2/p2.png?rlkey=f5ehtrhcyfrx9crn68ltg54t6&e=1&st=5cb92q4j&raw=1';
    img.className = 'food-image';

    img.onerror = () => {
        console.error("Image upload failed.")
        soupDiv.textContent = 'Image missing!';
    };

    soupDiv.appendChild(img);
});

document.getElementById('p3').addEventListener('click', () => {
    const soupDiv = document.getElementById('pickles');
    soupDiv.textContent = '';

    const img = document.createElement('img');
    img.src = 'https://www.dropbox.com/scl/fi/aifmcdt0b4p586uyvl3r9/p3.png?rlkey=khhsgnv4qu5qpojqjpypgi8kf&e=1&st=gjfxyxbz&raw=1';
    img.className = 'food-image';

    img.onerror = () => {
        console.error("Image upload failed.")
        soupDiv.textContent = 'Image missing!';
    };

    soupDiv.appendChild(img);
});