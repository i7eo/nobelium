import Link from 'next/link'

function Error ({ statusCode }) {
  return (
    <div className="error-wrapper">
      <div
        className="error-image"
        style={{
          width: '120px',
          height: '120px',
          background: 'url("https://i7eo.com/fail.png")',
          backgroundSize: 'cover'
        }}
      ></div>
      <div className="error-desc">
        <p>
          <b style={{ color: '#d41717', fontSize: '24px', lineHeight: '30px' }}>
            Oops ...
          </b>
          <span>
            {"It's embarrassing, but I'm sorry for"}
            {
                statusCode ? `${statusCode} error` : 'client error'
            }
          </span>
        </p>
        <p>
          <span>{"There's nothing to see here"}</span>
          <Link href={'/'}>GO BACK</Link>
        </p>
      </div>
    </div>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
