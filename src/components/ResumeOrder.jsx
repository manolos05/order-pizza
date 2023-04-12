

export function ResumeOrder ({title, buttonText, onClick, total}) {

    return (

        <div class="card text-end m-2" style={{width: "18rem"}}>
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{total}: $ </p>
          <a href="#" class="btn btn-primary" onClick={onClick}>{buttonText}</a>
        </div>
        </div>
    )


}