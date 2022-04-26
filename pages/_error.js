import Link from 'next/link'

function Error ({ statusCode }) {
  return (
    <div className="error-wrapper" style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', top: 0, left: 0, width: '100%', height: '100%' }}>
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
          <b className='text-3xl font-bold text-black dark:text-white'>
            Oops ...
          </b>
          <span className='font-bold text-black dark:text-white'>
            {"It's embarrassing, but I'm sorry for"}
            {
                statusCode ? `${statusCode} error` : 'client error'
            }
          </span>
        </p>
        <p>
          <span className='font-bold text-black dark:text-white'>{"There's nothing to see here"}</span>
          <Link href={'/'} className='text-2xl font-bold text-black dark:text-white'>GO BACK</Link>
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
