export type trabajo = {
    slug: string,
    company_name: string,
    title: string,
    description: string,
    remote: boolean,
    url: string,
    tags: string[],
    job_types: string[],
    location: string,
    created_at: number
  }
  


export type Tra ={
    datos: trabajo[]
}
export type a = {
    datos: trabajo
}

export type l = {
    datos: trabajo
    onClick: (slug: string) => void
}

