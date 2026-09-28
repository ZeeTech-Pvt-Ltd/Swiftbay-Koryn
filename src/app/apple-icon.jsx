import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

/** iOS home screen icon: brand tile with the gradient "S". */

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0b0714',
        }}
      >
        <div
          style={{
            width: '150px',
            height: '150px',
            borderRadius: '42px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#150f26',
            border: '1px solid rgba(170, 138, 250, 0.35)',
          }}
        >
          <div
            style={{
              fontSize: '86px',
              fontWeight: '700',
              color: '#AA8AFA',
              display: 'flex',
              lineHeight: 1,
            }}
          >
            S
          </div>
        </div>
      </div>
    ),
    size
  )
}
