const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");

// 设置认证 token
const token = "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";

// 设置上传的图片文件路径
const imagePath = "./image.jpg";

// 设置 repository 信息和 issue 编号
const owner = "exposir";
const repo = "blog";
const issueNumber = 135;

// 创建 FormData 对象，并将图片文件添加到其中
const form = new FormData();
form.append("file", fs.createReadStream(imagePath));

// 使用 axios 发送 POST 请求将图片上传到 GitHub 服务器
axios
  .post(
    `https://uploads.github.com/repos/${owner}/${repo}/issues/${issueNumber}/files`,
    form,
    {
      headers: {
        "Content-Type": `multipart/form-data; boundary=${form._boundary}`,
        Authorization: `Bearer ${token}`,
      },
    }
  )
  .then((res) => {
    // 在响应中获取上传的文件的 ID
    const fileId = res.data.id;

    // 使用 axios 发送 POST 请求将文件添加为 issue 的附件
    axios
      .post(
        `https://api.github.com/repos/${owner}/${repo}/issues/${issueNumber}/attachments`,
        {
          name: res.data.name,
          size: res.data.size,
          content_type: res.data.content_type,
          url: res.data.url,
          markdown: `![${res.data.name}](${res.data.url})`,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github.v3+json",
          },
        }
      )
      .then((res) => {
        console.log("File attached to issue successfully!");
      })
      .catch((err) => {
        console.error("Error attaching file to issue:", err);
      });
  })
  .catch((err) => {
    console.error("Error uploading file:", err);
  });
