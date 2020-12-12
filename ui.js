export class UI{
    constructor(){
        this.jobsList=document.getElementById("jobs");

    }
    addAllJobsToUI(jobs){
        let result="";
        let _new="";
        let _featured="";
        let languages="";
        let tools="";
        jobs.forEach(job=>{
            tools="";
            job.tools.forEach(tool=>{
                tools+=`
                <a href="#" class="badge badge-info ">${tool}</a>

                `;
            })
            languages="";
                job.languages.forEach(lang=>{
                    
                    languages+=`
                    <a href="#" class="badge badge-info ">${lang}</a>

                    `;


                })
                if(job.new==true)
                {
                    _new=`<span id="new" class="Card-title text-white bg-info rounded-pill p-1 pr-2 pl-2 mr-2">NEW ! </span>`;
                }
                else{
                    _new="";
                }
                if(job.featured==true)
                {
                    _featured=`<span id="featured" class="Card-title bg-dark p-1 pr-2 pl-2 text-white rounded-pill mr-2">FEATURED
                    </span>`
                }
                else{
                    _featured="";
                }
               
                result+=`
                    
                <div class="row">
                <div class="col-md-12 mt-3">
                    <div class="card borders-left" >
                        <div class="row no-gutters">
                            <div class="col-md-2 mr-1">
                                <div class="job-img pt-4 pl-5 ">
                                    <img id="img-logo" src="${job.logo}" alt="">
                                </div>
                            </div>
                            <div class="col-md-9">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="card-body">
                                            <div style="font-size:12px;" class="pb-2 card-titles  font-weight-bold">
                                                <span id="company" class="card-title  text-info rounded text-weight-bold ">${job.company}</span>    
                                               ${_new}
                                               ${_featured}
                                              
                                            </div>
    
                                            <p id="position" class="card-text font-weight-bold pt-2">${job.position}</p>
                                            <p id="information" class="card-text"><small class="text-muted">${job.postedAt+" "+job.contract+" "+job.location}</small>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="search pl-3 pr-3 pt-5 pb-5">
                                        <a href="#"  class="badge badge-info ">${job.role}</a>
                                        <a href="#" class="badge badge-info ">${job.level}</a>
                                            ${languages}
                                            ${tools}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
                
                
                
                
                
                
                
                
                `;

        });
        this.jobsList.innerHTML=result;
    }

}