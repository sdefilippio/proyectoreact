function Login() {
  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form>
        <label>Email: <input type="email" /></label>
        <label>Contraseña: <input type="password" /></label>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Login;
