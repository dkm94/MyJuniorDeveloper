import React from 'react'

export default function SectionButton() {
    return (
        <div className="section-btn">
            <div className="form-group row flex-end">
                <div className="col-sm-8 flex-end">
                <button type="submit" className="btn" onSubmit={this.props.handleSubmit}>Valider</button>
                </div>
            </div>
        </div>
    )
}
