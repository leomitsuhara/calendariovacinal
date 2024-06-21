document.addEventListener('DOMContentLoaded', function() {
    const calendarioVacinal = [
        { idade: 'Ao nascer', vacina: 'BCG', dose: 'Única' },
        { idade: 'Ao nascer', vacina: 'Hepatite B', dose: '1ª dose' },
        { idade: '2 meses', vacina: 'Pentavalente', dose: '1ª dose' },
        { idade: '2 meses', vacina: 'Poliomielite (VIP)', dose: '1ª dose' },
        { idade: '2 meses', vacina: 'Pneumocócica 10 valente', dose: '1ª dose' },
        { idade: '2 meses', vacina: 'Rotavírus', dose: '1ª dose' },
        { idade: '3 meses', vacina: 'Meningocócica C (conjugada)', dose: '1ª dose' },
        { idade: '4 meses', vacina: 'Pentavalente', dose: '2ª dose' },
        { idade: '4 meses', vacina: 'Poliomielite (VIP)', dose: '2ª dose' },
        { idade: '4 meses', vacina: 'Pneumocócica 10 valente', dose: '2ª dose' },
        { idade: '4 meses', vacina: 'Rotavírus', dose: '2ª dose' },
        { idade: '5 meses', vacina: 'Meningocócica C (conjugada)', dose: '2ª dose' },
        { idade: '6 meses', vacina: 'Pentavalente', dose: '3ª dose' },
        { idade: '6 meses', vacina: 'Poliomielite (VIP)', dose: '3ª dose' },
        { idade: '6 meses', vacina: 'Influenza', dose: '1ª dose (se sazonal)' },
        { idade: '9 meses', vacina: 'Febre Amarela', dose: '1ª dose' },
        { idade: '12 meses', vacina: 'Pneumocócica 10 valente', dose: 'Reforço' },
        { idade: '12 meses', vacina: 'Meningocócica C (conjugada)', dose: 'Reforço' },
        { idade: '12 meses', vacina: 'Tríplice viral (SCR)', dose: '1ª dose' },
        { idade: '15 meses', vacina: 'DTP', dose: '1º Reforço' },
        { idade: '15 meses', vacina: 'Poliomielite (VOP)', dose: '1º Reforço' },
        { idade: '15 meses', vacina: 'Hepatite A', dose: 'Única' },
        { idade: '15 meses', vacina: 'Tetra viral (SCRV)', dose: 'Única' },
        { idade: '4 anos', vacina: 'DTP', dose: '2º Reforço' },
        { idade: '4 anos', vacina: 'Poliomielite (VOP)', dose: '2º Reforço' },
        { idade: '4 anos', vacina: 'Varicela', dose: 'Única' },
        { idade: '4 anos', vacina: 'Febre Amarela', dose: 'Reforço' },
        // Adicione mais dados conforme necessário
    ];

    const tabelaBody = document.querySelector('#calendario tbody');

    calendarioVacinal.forEach(vacina => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${vacina.idade}</td>
            <td>${vacina.vacina}</td>
            <td>${vacina.dose}</td>
        `;
        tabelaBody.appendChild(linha);
    });
});

