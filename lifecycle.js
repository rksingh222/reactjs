componentDidMount() === useEffect(..., [])
componentDidUpdate() === useEffect(..., [ somevalue ])
componentWillUnmount() === useEffect(()=>{return () => {}) - for clearing 
