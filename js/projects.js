window.onload = function () {
  const titles = document.querySelector(".titles");
  const titles_imgs = document.querySelector(".titles-imgs");
  const text = document.querySelector(".text");
  const text1 = document.querySelector(".text1");
  const text2 = document.querySelector(".text2");
  const text3 = document.querySelector(".text3");
  const img1 = document.querySelector(".titles-img1");
  let scrollLeft = 0;

  window.addEventListener("scroll", (e) => {
    const distanceFromTop = text2.getBoundingClientRect().top;
    const top3 = text3.getBoundingClientRect().top;
    const top_img1 = img1.getBoundingClientRect().top;
    if (distanceFromTop <= 80 && top3 >= 160) {
      text2.style.position = "fixed";
      text2.style.top = "47.33px"; // 将元素固定在视口顶部
    } else {
      text2.style.position = "relative"; // 当滚动距离大于 20 时，恢复默认定位方式
    }
    if (top_img1 >= 0) {
      text2.style.position = "relative";
      text2.style.top = "0";
    }
  });

  const video_box = document.querySelector(".video-box");
  const video_about = document.querySelector(".video-about");

  window.addEventListener("scroll", (e) => {
    const video_about_bottom = video_about.getBoundingClientRect().bottom;
    const video_box_bottom = video_box.getBoundingClientRect().bottom;
    const top_img1 = img1.getBoundingClientRect().top;
    const top3 = text3.getBoundingClientRect().top;

    video_about.style.animation = `fadeIn 1.5s ease-in forwards`;
    //console.log(video_about_bottom)  214  -286 500px
    //console.log(top3)
    let n = 0.2;
    n = 1 - (Math.abs(top3) / window.innerHeight) * 1;
    //console.log(n)
    if (n < 0.2 && top3 > 0) {
      n = 0.2;
      video_about.style.transform = `scaleX(${n}) scaleY(${n})`;
      console.log(top3);
    } else if (0.2 <= n <= 1 && top3 > 0) {
      video_about.style.transform = `scaleX(${n}) scaleY(${n})`;
    } else {
      n = 1;
      video_about.style.transform = `scaleX(${n}) scaleY(${n})`;
    }

    let n1 = 0;
    n1 = 1 - (Math.abs(top3) / window.innerHeight) * 1;
    if (n1 < 0.1) {
      // video_box.style.marginTop = `-30%`
      // console.log("1111")
    } else if (0 <= n1 <= 1 && top3 > 0) {
      let y = 40;
      y = y * n1 - 40;
      // console.log(y)
      //console.log(n1)
      //console.log("_______________")
      video_box.style.marginTop = `${y + 10}%`;
    } else {
      video_box.style.marginTop = `0`;
      // console.log(n1)
    }
  });
};
