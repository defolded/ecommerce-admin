'use client'

import ApiList from '@/components/ui/api-list'
import { Button } from '@/components/ui/button'
import { DataTable } from '@/components/ui/data-table'
import Heading from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'
import { Plus } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'
import { CategoryColumn, columns } from './columns'

interface ICategoryClient {
    data: CategoryColumn[]
  }

const CategoryClient: React.FC<ICategoryClient> = ({
    data
}) => {
    const router = useRouter()
    const params = useParams()

  return (
    <>
        <div className='flex items-center justify-between'>
            <Heading 
                title={`Categories (${data.length})`}
                description='Manage categories for your store'
            />
            <Button onClick={() => router.push(`/${params.storeId}/categories/new`)}>
                <Plus className='h-4 w-4' />
            </Button>
        </div>
        <Separator />
        <DataTable searchKey='name' columns={columns} data={data} />
        <Heading title='API' description='API calls for Categories'/>
        <Separator />
        <ApiList entityName='categories' entityIdName='categoryId'/>
    </>
  )
}

export default CategoryClient