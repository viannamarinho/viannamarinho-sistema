<!-- ========= REGRAS & FEATURES DO NEXT 13 ========= -->

- Dentro do app são setadas as páginas e funciona da seguinte forma:
  - A pasta consiste no nome da rota
  - O arquivo page.tsx é o único nome de arquivo que o Next lê como arquivo de página
    - Qualquer outro arquivo que não seja o page não é irterpretado como página

# FETCH

- Colocar função do componente como async

const response = await fetch('https://...', {
next: {
revalidate: 30, // Feature que faz essa chamada ser revalidada a cada 30s
},
cache: 'no-store' // Feature que controla o cache dessa requisição
})

# DICA

Sempre que for feito 2 ou mais requisições no mesmo componente em que uma não dependa da outra,
utilizar a formatação abaixo:

const [resp1, resp2] = await Promise.all([
fetch(''),
fetch('')
])

# ACESSAR OS COOKIES

import { cookies, headers } from 'next/headers'

const userCookies = cookies()
const userHeaders = headers()

{JSON.stringify(userCookies.getAll(), null, 2)}
{JSON.stringify(userCookies.get('cookie_name'), null, 2)}
...
{JSON.stringify(userHeaders.entries(), null, 2)}

É possível chamar essas funções dentro do componente

# COLOCANDO LOADING EM COMPONENTES

O Next identifica quando um componente está carregando para ser exibido e pode-se colocar um loading
para que até que o componente esteja apto para aparecer o loading fique no seu lugar

- Detalhe: O componente loading é definido pelo próprio Next através do arquivo loading.tsx

import { Suspense } from 'react'

<Suspense fallback={<p>Carregando</p>}>
// Componente que demora
</Suspense>

# NAVEGAÇÃO

// Importantando de 'next/navigation' é possível obter funções interessantes como 'useSearchParams, usePathname, ...'
const { useRouter } from 'next/navigation'

const { push, prefetch, params, ... } = useRouter()

# REFRESH A CADA NOVA NAVEGAÇÃO DE ROTA

// O código abaixo faz com que a página seja atualizada a cada vez que a sua rota é ativa

const { useRouter } from 'next/navigation'

const router = useRouter()
router.refresh()

# HIDRATAÇÃO

'use_client'

Somente esses componentes serão carregados na hidratação, componente que armazenam e lidam com estados do usuário

- Obs: Quando se usa essa tag, a função do componente não pode ser assíncrona
