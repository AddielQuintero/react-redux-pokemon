import { CardLinkProps, CardProps } from '@types'
import { Link } from 'react-router-dom'

export const CustomCard = (props: CardProps) => {
  // const containerStyle = { ...props.style, border: `1px solid ${props.style?.color}` }

  return (
    <>
      <div className={props.className} style={props.style}>
        <div style={props.style} className={props.classContentImg}>
          {props.classImg && <img className={props.classImg} src={props.src} alt="" />}
        </div>
        {props.classTitle && <h2 className={props.classTitle}>{props.title}</h2>}
        {props.classSubTitle && <p className={props.classSubTitle}>{props.subTitle}</p>}
        {props.classContentLink && (
          <div className={props.classContentLink}>
            {props.links &&
              props.links.map((item: CardLinkProps) => (
                <Link
                  to={item.to}
                  className={item.classLink}
                  style={{
                    backgroundColor: `${item.styleLink.color}50`,
                    color: `${item.styleLink.color}`,                    
                  }}
                  key={item.label}
                >
                  {item.label}
                </Link>
              ))}
          </div>
        )}
        {props.hr && <hr />}
        {props.classBody && (
          <div className={props.classBody}>
            <h3 className={props.classBodyTitle}>{props.bodyTitle}</h3>
            <p className={props.classBodyDescription}>{props.bodyDescription}</p>
          </div>
        )}
        {props.children}
      </div>
    </>
  )
}
