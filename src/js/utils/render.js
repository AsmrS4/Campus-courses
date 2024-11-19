export const groupCard = (data, isAdmin) => {
    let hidden = (!isAdmin) ? 'd-none' : '';
    let underlined = isAdmin ? 'underlined' : '';
    console.log(isAdmin)
    return (
        `
        <div class="group-item">
            <a class="${underlined}" href="${data.id}">${data.name}</a>
            <div class="group-item-button-wrapper ${hidden}">
                <button type="button" class="btn btn-warning">Изменить</button>
                <button type="button" class="btn btn-danger">Удалить</button>
            </div>
        </div>
        `
    )
}