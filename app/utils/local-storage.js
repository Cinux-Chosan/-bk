// 由于代码要在本地 ie 中运行， ie 的 localStorage 等需要在服务器环境的页面运行，而之前的开发阶段本地启动了开发服务器，未发现该问题，打包过后直接运行才发现。
// 由于不做永久存储， 因此此代码作为临时补丁方案

class MyLocalStorage{
  data = {};
  getItem(name) {
    return this.data[name];
  }
  setItem(k, v) {
    this.data[k] = v;
  }
  clear() {
    this.data = {};
  }
}

window.myLocalStorage = window.localStorage || new MyLocalStorage();