# 🔐 Validador de Senhas

Um validador de senhas interativo desenvolvido com HTML, CSS e JavaScript que utiliza expressões regulares (regex) para verificar a força e validade de senhas em tempo real.

## ✨ Funcionalidades

- **Validação em tempo real**: A senha é validada conforme o usuário digita
- **Critérios de validação**:
  - Mínimo de 8 caracteres
  - Pelo menos um número (0-9)
  - Pelo menos uma letra maiúscula (A-Z)
  - Pelo menos um caractere especial (!, @, #, $, etc.)
- **Feedback visual**: Indicadores coloridos mostram quais critérios foram atendidos
- **Botão de visibilidade**: Permite mostrar/ocultar a senha digitada
- **Interface responsiva**: Design moderno e adaptável

## 🚀 Como usar

1. Abra o arquivo `index.html` em seu navegador
2. Digite uma senha no campo de entrada
3. Observe o feedback em tempo real sobre a validade da senha
4. Use o botão "Mostrar/Ocultar" para visualizar a senha digitada

## 🛠️ Tecnologias utilizadas

- **HTML5**: Estrutura da página
- **CSS3**: Estilização e responsividade
- **JavaScript (ES6+)**: Lógica de validação e interatividade
- **Expressões Regulares (Regex)**: Validação de padrões de senha

## 📁 Estrutura do projeto

```
validador-de-senhas/
├── index.html          # Página principal
├── script.js           # Lógica de validação
├── style.css           # Estilos da aplicação
└── README.md           # Documentação do projeto
```

## 🔍 Detalhes técnicos

### Expressões Regulares utilizadas

- **Comprimento**: `/.{8,}/` - Verifica se há pelo menos 8 caracteres
- **Números**: `/[0-9]/` - Detecta presença de dígitos
- **Maiúsculas**: `/[A-Z]/` - Verifica letras maiúsculas
- **Especiais**: `/[^a-zA-Z0-9]/` - Identifica caracteres especiais

### Funcionalidades JavaScript

- Validação em tempo real com `addEventListener('keyup')`
- Alternância de classes CSS para feedback visual
- Toggle de visibilidade da senha
- Cálculo de força da senha baseado em critérios atendidos

## 🎨 Interface

- Design limpo e moderno com cores azuis e verdes
- Feedback visual imediato com cores (vermelho para inválido, verde para válido)
- Layout responsivo que se adapta a diferentes tamanhos de tela
- Animações suaves para transições de estado

## 📝 Exemplo de uso

1. Digite uma senha como "MinhaSenh@123"
2. Observe que todos os critérios ficam verdes
3. A mensagem "Sua senha é válida!" aparece em verde
4. Use o botão para alternar a visibilidade da senha

## 🔧 Personalização

Para modificar os critérios de validação, edite as expressões regulares no arquivo `script.js`:

```javascript
const lengthRegex = /.{8,}/        // Altere o número mínimo de caracteres
const numberRegex = /[0-9]/        // Modifique critérios de números
const upperRegex = /[A-Z]/         // Ajuste critérios de maiúsculas
const specialRegex = /[^a-zA-Z0-9]/ // Personalize caracteres especiais
```

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

---

Desenvolvido com ❤️ para fins educacionais e práticos de validação de senhas.
