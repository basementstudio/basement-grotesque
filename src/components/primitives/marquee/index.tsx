import styles from './marquee.module.css'

const Marquee = ({
  children,
  duration = 20
}: {
  children: React.ReactNode
  duration?: number
}) => {
  return (
    <div
      className={styles.wrapper}
      style={{ ['--duration' as string]: `${duration}s` }}
    >
      <div className={styles.marquee}>
        <div className={styles.children}>{children}</div>
        <div className={styles.children}>{children}</div>
      </div>
    </div>
  )
}

export default Marquee
