// Sistema de autenticação simples
const AUTH_KEY = 'oratorio_auth';
const AUTH_PASSWORD = '';

// Verificar se está autenticado
function isAuthenticated() {
    const auth = sessionStorage.getItem(AUTH_KEY);
    return auth === 'true';
}

// Fazer login
function login(password) {
    if (password === AUTH_PASSWORD) {
        sessionStorage.setItem(AUTH_KEY, 'true');
        return true;
    }
    return false;
}

// Fazer logout
function logout() {
    sessionStorage.removeItem(AUTH_KEY);
    window.location.reload();
}

// Verificar autenticação ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    if (!isAuthenticated()) {
        showLoginScreen();
    } else {
        showMainContent();
    }
});

// Mostrar tela de login
function showLoginScreen() {
    document.body.innerHTML = `
        <div class="login-container">
            <div class="login-box">
                <h1 class="login-title">Oratório</h1>
                <p class="login-subtitle">Cadastro de Crianças</p>
                <form id="loginForm" class="login-form">
                    <input 
                        type="password" 
                        id="passwordInput" 
                        class="login-input" 
                        placeholder="Digite a senha"
                        autocomplete="off"
                        required
                    >
                    <button type="submit" class="login-button">Entrar</button>
                    <p id="loginError" class="login-error" style="display: none;">Senha incorreta</p>
                </form>
            </div>
        </div>
    `;

    // Adicionar estilos de login
    const style = document.createElement('style');
    style.textContent = `
        .login-container {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #f3f4f6;
            padding: 20px;
        }
        
        .login-box {
            background: white;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            border: 1px solid #d1d5db;
            width: 100%;
            max-width: 400px;
        }
        
        .login-title {
            font-size: 28px;
            font-weight: 600;
            color: #111827;
            text-align: center;
            margin-bottom: 8px;
        }
        
        .login-subtitle {
            font-size: 14px;
            color: #6b7280;
            text-align: center;
            margin-bottom: 32px;
        }
        
        .login-form {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }
        
        .login-input {
            width: 100%;
            padding: 12px 16px;
            font-size: 16px;
            border: 1px solid #d1d5db;
            border-radius: 4px;
            outline: none;
            transition: all 0.2s ease;
            font-family: 'Poppins', sans-serif;
        }
        
        .login-input:focus {
            border-color: #2563eb;
            box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);
        }
        
        .login-button {
            width: 100%;
            padding: 12px;
            background: #2563eb;
            color: white;
            border: none;
            border-radius: 4px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            font-family: 'Poppins', sans-serif;
        }
        
        .login-button:hover {
            background: #1e40af;
        }
        
        .login-button:active {
            transform: scale(0.98);
        }
        
        .login-error {
            color: #dc2626;
            font-size: 14px;
            text-align: center;
            margin-top: -8px;
        }
    `;
    document.head.appendChild(style);

    // Adicionar evento de submit
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const password = document.getElementById('passwordInput').value;
        const error = document.getElementById('loginError');
        
        if (login(password)) {
            window.location.reload();
        } else {
            error.style.display = 'block';
            document.getElementById('passwordInput').value = '';
            document.getElementById('passwordInput').focus();
        }
    });

    // Focar no input
    setTimeout(() => {
        document.getElementById('passwordInput').focus();
    }, 100);
}

// Mostrar conteúdo principal
function showMainContent() {
    // O conteúdo já está no HTML, apenas garantir que está visível
    document.querySelector('.container').style.display = 'block';
}

// Adicionar botão de logout (opcional)
function addLogoutButton() {
    const header = document.querySelector('.header-content');
    if (header && isAuthenticated()) {
        const logoutBtn = document.createElement('button');
        logoutBtn.textContent = 'Sair';
        logoutBtn.className = 'logout-btn';
        logoutBtn.onclick = logout;
        header.appendChild(logoutBtn);
    }
}

// Exportar funções
window.isAuthenticated = isAuthenticated;
window.logout = logout;
window.addLogoutButton = addLogoutButton;


