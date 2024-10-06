// Mudar a Descrição

const changeDescription = (nameCard, text) => {
    let infoSkills = document.querySelector('#info-skills')
    let cardName = document.querySelector('.card-name')

    document.querySelector(nameCard).addEventListener('mouseover', () => {
        infoSkills.innerHTML = text
        if(nameCard === '.html') {
            cardName.innerHTML = ' C# '
        } 
        if(nameCard === '.css') {
            cardName.innerHTML = ' PHP '
        }
        if(nameCard === '.js') {
            cardName.innerHTML = ' Web Services '
        }
        if(nameCard === '.git') {
            cardName.innerHTML = ' Git / Github '
        } 
        if(nameCard === '.responsive') {
            cardName.innerHTML = ' Responsividade '
        } 
        if(nameCard === '.accessibility') {
            cardName.innerHTML = ' Mobile '
        } 
    })

    document.querySelector(nameCard).addEventListener('mouseout', () => {
        infoSkills.innerHTML = '* passe o cursor sobre os ícones para saber mais *'
        cardName.innerHTML = ""
    })
}

changeDescription(
    '.html',
    'Atuei no desenvolvimento C#, utilizando MVVM, MVC, .NET Core e Entity Framework'
)

changeDescription(
    '.css',
    'Atuei no desenvolvimento web utilizando PHP, Bootstrap e Laravel para a criação de sites responsivos e funcionais. Desenvolvi páginas para a geração de relatórios dinâmicos, integrando dados de bancos de dados e oferecendo soluções eficientes para visualização e exportação de informações.'
)

changeDescription(
    '.js',
    'Tenho experiência com jQuery e AJAX no Plano Santa Saúde, onde desenvolvi interfaces dinâmicas, e com APIs RESTful na iPORT Solutions, integrando sistemas e garantindo a troca de dados em tempo real para aplicativos móveis.'
)

changeDescription(
    '.git',
    'Tenho experiência com Git para controle de versão, gerenciando branches e colaborando em projetos de desenvolvimento para garantir uma integração eficaz de código.'
)

changeDescription(
    '.responsive',
    'Responsividade utilizando propriedades de flexibilização de elementos.'   
)

changeDescription(
    '.accessibility',
    'Desenvolvi aplicativos móveis usando Xamarin, Avalonia e MAUI, aplicando MVVM e .NET Core para criar soluções eficientes e funcionais para Android e iOS.'   
)
