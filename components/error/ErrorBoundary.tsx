import React, { FC, ReactNode, useEffect, useState } from "react"

const ErrorBoundary: FC<{ error?: Error, children: ReactNode }> = (props) => {
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
      if (props.error) {
        setError(props.error)
      }
    }, [props.error])

    if (error) {
      return (
        <div>
          <h2>Oops, there is an error!</h2>
          <button
            type="button"
            onClick={() => setError(null)}
          >
            Try again?
          </button>
        </div>
      )
    }

    return null
  }
  
  export default ErrorBoundary