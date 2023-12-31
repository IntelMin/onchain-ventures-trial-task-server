import Wei, { wei } from '@synthetixio/wei'
import { truncateAddress } from '../../helpers/utils';

export async function getFuturesStats(req, res) {
  try {
    console.log("[api/stats/getFuturesStats] Requested");
    const stats = [
      {
				trader: '0xa540D8224aa8f18AB2C59DE7FD35444F504D0675',
				traderShort: truncateAddress('0xa540D8224aa8f18AB2C59DE7FD35444F504D0675'),
				pnl: 123.123,
				totalVolume: 123123.123123,
				totalTrades: 123,
				liquidations: 123,
				rank: 1,
				rankText: '1',
			}
    ]
    res.status(200).json({ data: stats });

  } catch(e) {
    console.error("[api/stats/getFuturesStats] Error:", e);
    res.status(500).json({ error: e });
  }
}
