import { ImageResponse } from 'next/og'

export const alt = 'Swiftbay Koryn: AI Powered Trading For Crypto And Stocks'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/** Site-wide Open Graph / Twitter share image. */

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#0b0714',
          backgroundImage:
            'linear-gradient(115deg, rgba(170,138,250,0.2) 0%, rgba(11,7,20,0) 45%), linear-gradient(295deg, rgba(170,138,250,0.18) 0%, rgba(11,7,20,0) 45%)',
          color: '#f3eefc',
          fontFamily: 'sans-serif',
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '44px',
          }}
        >
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#150f26',
              border: '1px solid rgba(170, 138, 250, 0.35)',
            }}
          >
            <div
              style={{
                fontSize: '38px',
                fontWeight: '700',
                color: '#AA8AFA',
                display: 'flex',
                lineHeight: 1,
              }}
            >
              S
            </div>
          </div>
          <div style={{ display: 'flex', fontSize: '40px', fontWeight: '700' }}>
            Swiftbay Koryn
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: '56px', fontWeight: '600', textAlign: 'center', maxWidth: '900px' }}>
          AI Powered Trading For Crypto And Stocks
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: '40px',
            fontSize: '22px',
            color: '#c2b8e0',
            letterSpacing: '0.12em',
          }}
        >
          SWIFTBAYKORYN.COM
        </div>
      </div>
    ),
    size
  )
}
