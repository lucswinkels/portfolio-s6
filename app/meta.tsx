import Head from "next/head"

type Props = {
  page: string
  slug: string
}

const Meta: React.FC<Props> = ({ page, slug }) => {
  const title = `${page} // Portfolio S6`
  const description = `${page} // Portfolio S6`

  const domain = ""

  const favicon = "/favicon.ico"
  const logo = `${domain}/img/logo/png/ls-logo-black.png`
  const image = `${domain}/img/logo/banner.png`

  return (
    <Head>
      <title>{title}</title>
      <meta
        name="keywords"
        content="luc, swinkels, luc swinkels, developer, portfolio, front-end developer, web, webdeveloper"
      />
      <meta name="description" content={description} />
      <link rel="icon" href={favicon} />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta itemProp="image" content={image} />
      <meta property="og:logo" content={logo} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />

      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#09090b" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  )
}

export default Meta
