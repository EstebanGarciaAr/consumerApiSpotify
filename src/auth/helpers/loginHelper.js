export const loginHelper = async (loginFn, setError, navigate) => {
    const isLogged = await loginFn();
    if (!isLogged) {
      setError(true);
      return;
    }
    navigate("/", { replace: true });
  };