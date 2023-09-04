import {initialProfile} from '@/lib/initial-profile';
import { db } from '@/lib/db';
import { redirect } from 'next/navigation';
import { IntitailModal } from '@/components/models/initial-modal';

const SetUpPage = async () => {
    const profile = await initialProfile();

    const server = await db.server.findFirst({
        where: {
            members: {
                some:{
                    profileId: profile.id
                }
            }
        }
    });

    if(server){
        return redirect(`/servers/${server.id}`);
    }
    return (
        <IntitailModal />
    );
}
 
export default SetUpPage;