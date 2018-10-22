export const LOADD3FORCEDATA="LOADD3FORCEDATA";
export const LOADSYSFORCEDATA="LOADSYSFORCEDATA";

export function loadD3ForceData(){
    return {
        type:LOADD3FORCEDATA
    };
}

export function loadSysForceData(data){
    return {
        type:LOADSYSFORCEDATA,
        data:data
    };
}
