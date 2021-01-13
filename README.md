This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## アプリ作成の過程
１．next.jsでアプリ作成

      npx create-next-app projectName


２．Material-uiのインストール

      yarn add @material-ui/core @material-ui/icons 

      material-table --netwrok -timeout 100000


３．必要フォルダ・フォルダの作成(計2フォルダ、4ファイル作成)

      /componentsにLayout.js,Header.js,Footer.js

      /static/Style.js　　←元からある/stylesのものを使うべきかも


４．Layout.js(Header.js,Footer.js,Style.js)コンポーネントの作成

    ※このアプリのをそのままコピペでOK！


５．AWS Amplifyにデプロイ

      ➀package.jsonを一部書き換え

      "build":"next build && next export"

      ➁amplify init時、基本デフォルトでEnterだがこれだけは選ぶ

      Distribution Directory Path:out　　←しっかりoutにすること

      ➂AmplifyコンソールでGitHubのリポジトリに接続(全部デフォルト、バックエンド環境：envにした←なんでもいいかも)

      参考にしたページ

      https://dev.to/mubbashir10/host-next-js-app-on-aws-within-5-minutes-with-ci-cd-1o0a

      https://aws.amazon.com/blogs/mobile/ssr-support-for-aws-amplify-javascript-libraries/


６．各ページコンポーネントの作成 welcome,Works,About,Contact(フロントのみ作成)


７．Contactのフォームにバリデーション追加(formik,Yup使用)

      "yarn add formik"
      "yarn add yup"

      formikの基本

      https://qiita.com/zaburo/items/61f3aa4cfb950a64f45e

      axios使用までの記事

      https://medium.com/codefully-io/react-forms-validation-with-formik-and-material-ui-1adf0c1cae5c


８．ContactのフォームつなげるためAWSコンコールからAWS SESとLAMBDAを作成

https://aws.amazon.com/premiumsupport/knowledge-center/lambda-send-email-ses/


９．Contactにaxios追加でAPI使ってAWS Lambdaと繋げる
