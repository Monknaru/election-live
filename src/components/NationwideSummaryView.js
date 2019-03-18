import React from "react"
import PartyStatsList from "./PartyStatsList"

// @ts-check

/**
 * @param {{ loading: boolean, headerData?: NationwideSummaryHeaderData, partyStats?: PartyStats }} props
 */
export function NationwideSummaryView(props) {
  const renderContents = () => {
    if (props.loading) {
      // @todo #1 Design and implement a loading state
      return "..."
    } else {
      return (
        <div>
          <NationwideSummaryHeader headerData={props.headerData} />
          <PartyStatsList partyStats={props.partyStats} />
        </div>
      )
    }
  }

  return (
    <div>
      <h1>ทั่วประเทศ</h1>
      {renderContents()}
    </div>
  )
}

/**
 * @param {{ headerData: NationwideSummaryHeaderData }} props
 */
function NationwideSummaryHeader(props) {
  const data = props.headerData
  const percentage = Math.round(
    (data.totalVoteCount / data.eligibleVoterCount) * 100
  )
  return (
    <div>
      <p>เขตทั้งหมด {data.totalZoneCount} เขต</p>
      <p>นับเสร็จแล้ว {data.completedZoneCount} เขต</p>
      <p>
        มีผู้มาใช้สิทธิ์ {data.totalVoteCount} คน ({percentage}%)
      </p>
    </div>
  )
}
