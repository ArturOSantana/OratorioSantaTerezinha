// Configuration
const USE_LOCAL_DATA = false; // true = usar data.js | false = usar Google Sheets
const SHEET_ID = '1Muvxv9Vn2-n2daLxNS6lnMcn29lL2DmXZ5Siy21mwro';
const SHEET_NAME = 'Sheet1';

// State
let allChildren = [];
let filteredChildren = [];
let currentFilter = 'all';
let currentIdadeFilter = 'all';
let currentSort = 'default';

// DOM Elements
const childrenList = document.getElementById('childrenList');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const idadeFilter = document.getElementById('idadeFilter');
const sortOrder = document.getElementById('sortOrder');
const loading = document.getElementById('loading');
const emptyState = document.getElementById('emptyState');
const modal = document.getElementById('childModal');
const modalBody = document.getElementById('modalBody');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

async function initializeApp() {
    try {
        await loadData();
        setupEventListeners();
        renderChildren();
        updateStats();
    } catch (error) {
        console.error('Erro ao inicializar:', error);
        showError();
    }
}

// Load data
async function loadData() {
    loading.style.display = 'block';
    
    try {
        if (USE_LOCAL_DATA) {
            // Usar dados do arquivo data.js
            if (typeof childrenData !== 'undefined') {
                allChildren = childrenData;
                filteredChildren = [...allChildren];
            } else {
                throw new Error('Dados não encontrados');
            }
        } else {
            // Carregar do Google Sheets
            const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv`;
            const response = await fetch(url);
            const csvText = await response.text();
            allChildren = parseCSV(csvText);
            filteredChildren = [...allChildren];
        }
        
        loading.style.display = 'none';
    } catch (error) {
        console.error('Erro ao carregar dados:', error);
        showError();
        loading.style.display = 'none';
    }
}

// Parse CSV data
function parseCSV(csv) {
    const lines = csv.split('\n');
    
    const children = [];
    
    // Pular as primeiras 6 linhas (header com quebras de linha)
    // Os dados reais começam na linha 7 (índice 6)
    for (let i = 6; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;
        
        const values = parseCSVLine(line);
        
        // Estrutura do CSV:
        // 0: Carimbo, 1: Nome, 2: Idade, 3: Endereço,
        // 4: Tem condição?, 5: Qual condição?, 6: Tem alergia?, 7: Qual alergia?,
        // 8: Usa medicamento?, 9: Qual medicamento?, 10: Observações,
        // 11: Nome mãe, 12: Tel mãe, 13: Nome pai, 14: Tel pai, 15: Tel emergência
        
        const nome = (values[1] || '').trim();
        const idade = (values[2] || '').trim();
        const endereco = (values[3] || '').trim();
        const temCondicao = (values[4] || '').trim();
        const qualCondicao = (values[5] || '').trim();
        const temAlergia = (values[6] || '').trim();
        const qualAlergia = (values[7] || '').trim();
        const temMedicamento = (values[8] || '').trim();
        const qualMedicamento = (values[9] || '').trim();
        const observacoes = (values[10] || '').trim();
        const nomeMae = (values[11] || '').trim();
        const telefoneMae = (values[12] || '').trim();
        const nomePai = (values[13] || '').trim();
        const telefonePai = (values[14] || '').trim();
        const telefoneEmergencia = (values[15] || '').trim();
        
        // Pular se não tiver nome
        if (!nome) continue;
        
        // Processar nome dos pais
        let nomesPais = '';
        if (nomeMae && nomePai) {
            nomesPais = `${nomeMae} / ${nomePai}`;
        } else if (nomeMae) {
            nomesPais = nomeMae;
        } else if (nomePai) {
            nomesPais = nomePai;
        }
        
        // Telefone de contato principal
        const telefoneContato = telefoneEmergencia || telefoneMae || telefonePai;
        
        // Normalizar idade
        const idadeNormalizada = normalizeIdade(idade);
        
        children.push({
            id: i - 5, // Ajustar ID para começar de 1
            nome: nome,
            idade: idadeNormalizada.texto,
            idadeNumero: idadeNormalizada.numero,
            nomesPais: nomesPais,
            telefoneContato: telefoneContato,
            telefoneMae: telefoneMae,
            telefonePai: telefonePai,
            telefoneEmergencia: telefoneEmergencia,
            temAlergia: temAlergia,
            alergia: qualAlergia,
            temCondicaoSaude: temCondicao,
            condicaoSaude: qualCondicao,
            temMedicamento: temMedicamento,
            medicamento: qualMedicamento,
            endereco: endereco,
            observacoes: observacoes
        });
    }
    
    console.log('Crianças processadas:', children.length);
    return children;
}

// Parse CSV line handling quoted values
function parseCSVLine(line) {
    const values = [];
    let current = '';
    let inQuotes = false;
    
    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        
        if (char === '"') {
            inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
            values.push(current.trim());
            current = '';
        } else {
            current += char;
        }
    }
    
    values.push(current.trim());
    return values;
}

// Example data for testing
function getExampleData() {
    return [
        {
            id: 1,
            nome: 'João Silva',
            idade: '8 anos',
            dataNascimento: '15/03/2018',
            telefone: '(11) 98765-4321',
            alergia: 'Lactose',
            observacoes: 'Precisa de atenção especial na alimentação',
            responsavel: 'Maria Silva',
            endereco: 'Rua das Flores, 123'
        },
        {
            id: 2,
            nome: 'Ana Santos',
            idade: '7 anos',
            dataNascimento: '22/07/2019',
            telefone: '(11) 91234-5678',
            alergia: '',
            observacoes: '',
            responsavel: 'José Santos',
            endereco: 'Av. Principal, 456'
        },
        {
            id: 3,
            nome: 'Pedro Oliveira',
            idade: '9 anos',
            dataNascimento: '10/11/2017',
            telefone: '(11) 99876-5432',
            alergia: 'Amendoim, Glúten',
            observacoes: 'Alergia severa - sempre verificar ingredientes',
            responsavel: 'Carla Oliveira',
            endereco: 'Rua do Comércio, 789'
        },
        {
            id: 4,
            nome: 'Mariana Costa',
            idade: '6 anos',
            dataNascimento: '05/01/2020',
            telefone: '(11) 97654-3210',
            alergia: '',
            observacoes: 'Muito tímida, precisa de incentivo',
            responsavel: 'Roberto Costa',
            endereco: 'Rua Nova, 321'
        },
        {
            id: 5,
            nome: 'Lucas Ferreira',
            idade: '10 anos',
            dataNascimento: '18/09/2016',
            telefone: '(11) 96543-2109',
            alergia: 'Frutos do mar',
            observacoes: '',
            responsavel: 'Paula Ferreira',
            endereco: 'Av. Central, 654'
        }
    ];
}

// Normalize idade to always show "X anos"
function normalizeIdade(idade) {
    if (!idade || idade.trim() === '') {
        return { texto: 'Não informado', numero: 0 };
    }
    
    // Extrair número da idade
    const match = idade.match(/(\d+)/);
    if (match) {
        const numero = parseInt(match[1]);
        return { texto: `${numero} anos`, numero: numero };
    }
    
    return { texto: idade, numero: 0 };
}

// Setup event listeners
function setupEventListeners() {
    // Search
    searchInput.addEventListener('input', debounce(handleSearch, 300));
    
    // Filters
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => handleFilter(btn.dataset.filter));
    });
    
    // Idade filter
    idadeFilter.addEventListener('change', handleIdadeFilter);
    
    // Sort order
    sortOrder.addEventListener('change', handleSort);
    
    // Close modal on escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// Handle search
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase().trim();
    applyFiltersAndSort(searchTerm);
}

// Handle filter
function handleFilter(filter) {
    currentFilter = filter;
    
    // Update active button
    filterButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === filter);
    });
    
    const searchTerm = searchInput.value.toLowerCase().trim();
    applyFiltersAndSort(searchTerm);
}

// Handle idade filter
function handleIdadeFilter(e) {
    currentIdadeFilter = e.target.value;
    const searchTerm = searchInput.value.toLowerCase().trim();
    applyFiltersAndSort(searchTerm);
}

// Handle sort
function handleSort(e) {
    currentSort = e.target.value;
    const searchTerm = searchInput.value.toLowerCase().trim();
    applyFiltersAndSort(searchTerm);
}

// Apply all filters and sort
function applyFiltersAndSort(searchTerm = '') {
    // Filter
    filteredChildren = allChildren.filter(child => {
        const matchesSearch = !searchTerm || child.nome.toLowerCase().includes(searchTerm);
        const matchesFilter = applyFilter(child, currentFilter);
        const matchesIdade = applyIdadeFilter(child, currentIdadeFilter);
        return matchesSearch && matchesFilter && matchesIdade;
    });
    
    // Sort
    applySorting();
    
    renderChildren();
}

// Apply filter logic
function applyFilter(child, filter) {
    if (filter === 'all') return true;
    
    if (filter === 'atencao') {
        return child.temAlergia === 'Sim' ||
               child.temCondicaoSaude === 'Sim' ||
               child.temMedicamento === 'Sim';
    }
    
    if (filter === 'alergia') {
        return child.temAlergia === 'Sim';
    }
    
    return false;
}

// Apply idade filter
function applyIdadeFilter(child, filter) {
    if (filter === 'all') return true;
    
    const idade = child.idadeNumero;
    
    if (filter === '0-6') return idade >= 0 && idade <= 6;
    if (filter === '7-9') return idade >= 7 && idade <= 9;
    if (filter === '10-12') return idade >= 10 && idade <= 12;
    if (filter === '13+') return idade >= 13;
    
    return true;
}

// Apply sorting
function applySorting() {
    if (currentSort === 'alfabetica') {
        filteredChildren.sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));
    } else if (currentSort === 'idade-asc') {
        filteredChildren.sort((a, b) => a.idadeNumero - b.idadeNumero);
    } else if (currentSort === 'idade-desc') {
        filteredChildren.sort((a, b) => b.idadeNumero - a.idadeNumero);
    }
    // 'default' mantém a ordem original
}

// Render children cards
function renderChildren() {
    childrenList.innerHTML = '';
    
    if (filteredChildren.length === 0) {
        emptyState.style.display = 'block';
        return;
    }
    
    emptyState.style.display = 'none';
    
    filteredChildren.forEach(child => {
        const card = createChildCard(child);
        childrenList.appendChild(card);
    });
}

// Create child card
function createChildCard(child) {
    const card = document.createElement('div');
    card.className = 'child-card';
    card.onclick = () => openModal(child);
    
    const hasAlergia = child.temAlergia === 'Sim';
    const hasCondicao = child.temCondicaoSaude === 'Sim';
    const initials = getInitials(child.nome);
    
    card.innerHTML = `
        <div class="child-header">
            <div class="child-avatar">${initials}</div>
            <div class="child-info">
                <div class="child-name">${escapeHtml(child.nome)}</div>
                <div class="child-age">${escapeHtml(child.idade)}</div>
            </div>
        </div>
        <div class="child-details">
            ${child.telefoneContato ? `
                <div class="detail-item">
                    <div class="detail-icon">☎</div>
                    <div class="detail-content">
                        <div class="detail-label">Telefone</div>
                        <div class="detail-value">
                            <a href="tel:${child.telefoneContato.replace(/\D/g, '')}">${escapeHtml(child.telefoneContato)}</a>
                        </div>
                    </div>
                </div>
            ` : ''}
            ${hasAlergia || hasCondicao ? `
                <div class="detail-item">
                    <div class="detail-icon">!</div>
                    <div class="detail-content">
                        <div class="detail-label">${hasAlergia && hasCondicao ? 'Alergia e Condição' : hasAlergia ? 'Alergia' : 'Condição'}</div>
                        <div class="detail-value">
                            ${hasAlergia ? escapeHtml(child.alergia) : ''}
                            ${hasAlergia && hasCondicao ? ' / ' : ''}
                            ${hasCondicao ? escapeHtml(child.condicaoSaude) : ''}
                        </div>
                        <span class="badge badge-warning">Atenção</span>
                    </div>
                </div>
            ` : `
                <div class="detail-item">
                    <div class="detail-icon">✓</div>
                    <div class="detail-content">
                        <div class="detail-label">Saúde</div>
                        <div class="detail-value">Sem restrições</div>
                        <span class="badge badge-success">OK</span>
                    </div>
                </div>
            `}
        </div>
    `;
    
    return card;
}

// Open modal with child details
function openModal(child) {
    const hasAlergia = child.temAlergia === 'Sim';
    const hasCondicao = child.temCondicaoSaude === 'Sim';
    const initials = getInitials(child.nome);
    
    modalBody.innerHTML = `
        <div class="modal-header">
            <div class="modal-avatar">${initials}</div>
            <div class="modal-name">${escapeHtml(child.nome)}</div>
            <div class="modal-age">${escapeHtml(child.idade)}</div>
        </div>
        <div class="modal-details">
            ${child.nomesPais ? `
                <div class="detail-item">
                    <div class="detail-icon">👤</div>
                    <div class="detail-content">
                        <div class="detail-label">Responsáveis</div>
                        <div class="detail-value">${escapeHtml(child.nomesPais)}</div>
                    </div>
                </div>
            ` : ''}
            ${child.telefoneEmergencia ? `
                <div class="detail-item">
                    <div class="detail-icon">☎</div>
                    <div class="detail-content">
                        <div class="detail-label">Emergência</div>
                        <div class="detail-value">
                            <a href="tel:${child.telefoneEmergencia.replace(/\D/g, '')}">${escapeHtml(child.telefoneEmergencia)}</a>
                        </div>
                    </div>
                </div>
            ` : ''}
            ${child.telefoneMae ? `
                <div class="detail-item">
                    <div class="detail-icon">☎</div>
                    <div class="detail-content">
                        <div class="detail-label">Tel. Mãe</div>
                        <div class="detail-value">
                            <a href="tel:${child.telefoneMae.replace(/\D/g, '')}">${escapeHtml(child.telefoneMae)}</a>
                            <a href="https://wa.me/55${child.telefoneMae.replace(/\D/g, '')}" class="whatsapp-btn" target="_blank">WhatsApp</a>
                        </div>
                    </div>
                </div>
            ` : ''}
            ${child.telefonePai ? `
                <div class="detail-item">
                    <div class="detail-icon">☎</div>
                    <div class="detail-content">
                        <div class="detail-label">Tel. Pai</div>
                        <div class="detail-value">
                            <a href="tel:${child.telefonePai.replace(/\D/g, '')}">${escapeHtml(child.telefonePai)}</a>
                            <a href="https://wa.me/55${child.telefonePai.replace(/\D/g, '')}" class="whatsapp-btn" target="_blank">WhatsApp</a>
                        </div>
                    </div>
                </div>
            ` : ''}
            ${child.endereco ? `
                <div class="detail-item">
                    <div class="detail-icon">📍</div>
                    <div class="detail-content">
                        <div class="detail-label">Endereço</div>
                        <div class="detail-value">${escapeHtml(child.endereco)}</div>
                    </div>
                </div>
            ` : ''}
            ${hasAlergia ? `
                <div class="detail-item">
                    <div class="detail-icon">!</div>
                    <div class="detail-content">
                        <div class="detail-label">Alergia</div>
                        <div class="detail-value">${escapeHtml(child.alergia)}</div>
                        <span class="badge badge-warning">Atenção</span>
                    </div>
                </div>
            ` : `
                <div class="detail-item">
                    <div class="detail-icon">✓</div>
                    <div class="detail-content">
                        <div class="detail-label">Alergia</div>
                        <div class="detail-value">Não possui</div>
                    </div>
                </div>
            `}
            ${hasCondicao ? `
                <div class="detail-item">
                    <div class="detail-icon">+</div>
                    <div class="detail-content">
                        <div class="detail-label">Condição de Saúde</div>
                        <div class="detail-value">${escapeHtml(child.condicaoSaude)}</div>
                        <span class="badge badge-warning">Atenção</span>
                    </div>
                </div>
            ` : `
                <div class="detail-item">
                    <div class="detail-icon">✓</div>
                    <div class="detail-content">
                        <div class="detail-label">Condição de Saúde</div>
                        <div class="detail-value">Não possui</div>
                    </div>
                </div>
            `}
            ${child.temMedicamento === 'Sim' ? `
                <div class="detail-item">
                    <div class="detail-icon">Rx</div>
                    <div class="detail-content">
                        <div class="detail-label">Medicamento</div>
                        <div class="detail-value">${escapeHtml(child.medicamento)}</div>
                    </div>
                </div>
            ` : ''}
            ${child.observacoes ? `
                <div class="detail-item">
                    <div class="detail-icon">i</div>
                    <div class="detail-content">
                        <div class="detail-label">Observações</div>
                        <div class="detail-value">${escapeHtml(child.observacoes)}</div>
                    </div>
                </div>
            ` : ''}
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Update statistics
function updateStats() {
    const totalCriancas = allChildren.length;
    const totalAlergias = allChildren.filter(c => c.temAlergia === 'Sim').length;
    const totalAtencao = allChildren.filter(c =>
        c.temAlergia === 'Sim' ||
        c.temCondicaoSaude === 'Sim' ||
        c.temMedicamento === 'Sim'
    ).length;
    
    document.getElementById('totalCriancas').textContent = totalCriancas;
    document.getElementById('totalAlergias').textContent = totalAlergias;
    document.getElementById('countAll').textContent = totalCriancas;
    document.getElementById('countAtencao').textContent = totalAtencao;
    document.getElementById('countAlergia').textContent = totalAlergias;
}

// Utility functions
function getInitials(name) {
    if (!name) return '?';
    const parts = name.trim().split(' ');
    if (parts.length === 1) return parts[0][0].toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function showError() {
    loading.innerHTML = `
        <div class="empty-icon">⚠️</div>
        <h3>Erro ao carregar dados</h3>
        <p>Não foi possível carregar os dados da planilha. Usando dados de exemplo.</p>
    `;
}

// Export functions for global access
window.closeModal = closeModal;

// Made with Bob
