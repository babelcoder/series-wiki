export function fetchComponent(dispatch, components, params) {
  const needs =
    components
      .filter(component => component)
      .reduce((prev, current) => {
        const wrappedComponent = current.WrappedComponent

        return (current.need || [])
          .concat(
            (wrappedComponent && wrappedComponent.need) || []
          )
          .concat(prev)
        }, []
      )

  return Promise.all(needs.map(need => dispatch(need(params))))
}
