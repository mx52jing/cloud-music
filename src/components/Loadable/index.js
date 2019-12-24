import React, {lazy, Suspense, memo} from 'react'

export default component => {
    const WrappendComponent = lazy(component)
    const LazyComponent = props => {
        const { loading = null, ...otherProps } = props
        return (
            <Suspense fallback={loading}>
                <WrappendComponent {...otherProps} />
            </Suspense>
        )
    }
    return memo(LazyComponent)
}
