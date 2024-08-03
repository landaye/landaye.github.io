window.onload = function () {
  const img_box = document.querySelector(".img-box");
  const bottom_title = document.querySelector(".bottom-title");
  const shop_choose = document.querySelector(".shop-choose");

  const shopChoose = document.querySelector(".shop-choose");
  const lastImg = document.querySelector("#img-last");
  const shopChooseTop = shopChoose.getBoundingClientRect().top;

  window.addEventListener("scroll", () => {
    const lastImgTop = lastImg.getBoundingClientRect().top;
    //console.log(shopChooseTop)
    //console.log(lastImgTop)
    const translateY = shopChooseTop - lastImgTop;
    shopChoose.style.transform = `translateY(-${translateY}px)`;
  });

  const imgBoxes = document.querySelectorAll("img");

  // 创建 Intersection Observer 实例
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 当元素出现在视口时添加 show 类
        entry.target.classList.add("tx2");
        // 停止观察已经出现的元素
        observer.unobserve(entry.target);
      }
    });
  });

  // 观察每个 img-box3 元素
  imgBoxes.forEach((imgBox) => {
    observer.observe(imgBox);
  });

  // 获取所有具有 class="b6" 的元素
  const imgBoxes2 = document.querySelectorAll(".b6");

  // 创建 Intersection Observer 实例
  const observer2 = new IntersectionObserver((entries2, observer2) => {
    entries2.forEach((entry) => {
      if (entry.isIntersecting) {
        // 当元素出现在视口时添加 show 类
        entry.target.classList.add("tx");
        // 停止观察已经出现的元素
        observer2.unobserve(entry.target);
      }
    });
  });

  // 观察每个 img-box3 元素
  imgBoxes2.forEach((imgBox2) => {
    observer2.observe(imgBox2);
  });

  const alert = document.querySelector(".alert");
  const alert_title = document.querySelector(".alert-title");
  const img_description = document.querySelector(".img-description");
  let src;

  function disableScroll() {
    document.body.style.overflow = "hidden";
  }

  function enableScroll() {
    document.body.style.overflow = "";
  }

  // 遍历所有图片元素并为它们添加点击事件监听器
  const imgGroups = [
    [
      "/about-img/1.jpg",
      "/about-img/2.jpg",
      "/about-img/3.jpg",
      "/about-img/4.jpg",
      "/about-img/5.jpg",
      "/about-img/7.jpg",
    ],
  ];
  let img_array = [
    [
      "长沙//毛爷爷",
      "重庆//来自老师的礼物",
      "重庆//和小伙伴完成了一次雨天爬山",
      "重庆//保持心灵的宁静",
      "湖北//神龙架一日游",
      "巫山//喜欢与自然亲近",
    ],
  ];
  imgBoxes.forEach((img) => {
    img.addEventListener("click", function () {
      src = img.getAttribute("src");
      x = img.getAttribute("data-x");
      y = img.getAttribute("data-y");
      alert.style.display = "flex";
      alert_title.innerHTML = `<img style="opacity: 1;" src="${src}" alt="">`;
      img_description.innerHTML = `<h6>${
        img_array[x][y].split("//")[0]
      }</h6><p>${img_array[x][y].split("//")[1]}</p>`;
      // 禁用滚轮滚动
      disableScroll();
    });
  });

  // 获得关闭按钮
  let btnClose = document.querySelector(".close");
  btnClose.onclick = function () {
    alert.style.display = "none";

    // 启用滚轮滚动
    enableScroll();
  };

  // 给整个弹出框添加点击事件监听器
  alert.onclick = function (e) {
    if (e.target === alert) {
      alert.style.display = "none";

      // 启用滚轮滚动
      enableScroll();
    }
  };
};
