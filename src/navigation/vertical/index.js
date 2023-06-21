export default [
  { heading: "首页" },
  {
    title: "主页",
    to: { name: "index" },
    icon: { icon: "tabler-smart-home" },
  },
  // {
  //   title: "发送文件",
  //   to: { name: "second-page" },
  //   icon: { icon: "tabler-file" },
  // },
  { heading: "文件" },
  {
    title: "全部文件",
    icon: { icon: "tabler-files" },
    to: "file-file-all",
  },
  {
    title: "我的文件",
    icon: { icon: "tabler-file-text" },
    to: "file-file-my",
  },
  {
    title: "共享给我",
    icon: { icon: "tabler-file-arrow-left" },
    to: "file-file-share",
  },
  { heading: "文件夹" },
  {
    title: "收件箱",
    icon: { icon: "tabler-mail" },
  },
  {
    title: "发件箱",
    icon: { icon: "tabler-send" },
  },
  {
    title: "中转站",
    icon: { icon: "tabler-home-2" },
  },
  // {
  //   title: "中转站",
  // },
];
