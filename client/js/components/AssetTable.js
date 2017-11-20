import React from "react"
import Base from "components/Base"

export default class AssetTable extends Base {
    render() {
        return (
            <div className="assetTable">
                <div className="assetTable_row assetTable_row-head">
                    <div className="assetTable_col assetTable_col-title">
                        合計評価額
                    </div>
                    <div className="assetTable_col assetTable_col-value">
                        <i className="fa fa-yen"/> 0.0000
                    </div>
                </div>
                <div className="assetTable_row">
                    <div className="assetTable_col assetTable_col-title">
                        日本円
                    </div>
                    <div className="assetTable_col assetTable_col-value"><i className="fa fa-yen"/> 0.0000</div>
                </div>
                <div className="assetTable_row">
                    <div className="assetTable_col assetTable_col-title">ビットゼニー</div>
                    <div className="assetTable_col assetTable_col-value">0.0000</div>
                </div>
                <div className="assetTable_row">
                    <div className="assetTable_col assetTable_col-title">モナーコイン</div>
                    <div className="assetTable_col assetTable_col-value">0.0000</div>
                </div>
                <div className="assetTable_row">
                    <div className="assetTable_col assetTable_col-title">ビットコイン</div>
                    <div className="assetTable_col assetTable_col-value"><i className="fa fa-btc"/> 0.0000</div>
                </div>
                <div className="assetTable_row">
                    <div className="assetTable_col assetTable_col-title">リップル</div>
                    <div className="assetTable_col assetTable_col-value">0.0000</div>
                </div>
                <div className="assetTable_row">
                    <div className="assetTable_col assetTable_col-title">イーサリアム</div>
                    <div className="assetTable_col assetTable_col-value">0.0000</div>
                </div>
            </div>
        )
    }
};
