export enum Regions {
  APAC = 'APAC',
  EMEA = 'EMEA'
}

export const main1 = (region: string) => {
  console.log(region)
}

export const main2 = (region: Regions) => {
  console.log(region)
}


main1(Regions.APAC)
main2(Regions.EMEA)



