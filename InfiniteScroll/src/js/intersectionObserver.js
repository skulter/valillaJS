const $ul = document.querySelector("ul");
let $li = document.querySelector("li:last-child");
let count = $ul.children.length;

const io = new IntersectionObserver(
  (entries, observer) => {
    console.log(entries)
    const ioTarget = entries[0];
    
    if (ioTarget.isIntersecting) {
      io.unobserve($li);

      $li = $ul.appendChild(document.createElement('li'));
      $li.innerText = ++count;
      io.observe($li);
    }
  },
  {
    threshold: 0.5
  }
);

io.observe($li);
