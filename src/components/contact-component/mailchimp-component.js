import styled from "styled-components"

const FormContent = styled.div`
  width: 571px;
  background: white;
`
const Title = styled.h2`
  font-size: 18px !important;
`
const SubscribeButton = styled.input`
  width: 116px !important;
  height: 32px !important;
  font-size: 14px;
  background: #e20e2d !important;
  border-radius: none !important;
  color: white;
  text-transform: uppercase;
  margin: 0 !important;
`
export const MailChimpComponent = () => {
  return (
    <FormContent id='mc_embed_signup'>
      <form
        action='https://app.us7.list-manage.com/subscribe/post?u=ff650aab88a981924261bf120&amp;id=bfa9dc4749'
        method='post'
        id='mc-embedded-subscribe-form'
        name='mc-embedded-subscribe-form'
        className='validate'
        target='_blank'
        noValidate
      >
        <div id='mc_embed_signup_scroll'>
          <Title>Inscreva-se</Title>
          <div className='indicates-required'>
            <span className='asterisk'>*</span> Campos obrigatorios
          </div>
          <div className='mc-field-group'>
            <label htmlFor='mce-EENCOMP'>
              Nome completo <span className='asterisk'>*</span>
            </label>
            <input
              type='text'
              name='EENCOMP'
              className='required'
              id='mce-EENCOMP'
            />
          </div>
          <div className='mc-field-group'>
            <label htmlFor='mce-EMAIL'>
              E-mail <span className='asterisk'>*</span>
            </label>
            <input
              type='email'
              name='EMAIL'
              className='required email'
              id='mce-EMAIL'
            />
          </div>
          <div className='mc-field-group size1of2'>
            <label htmlFor='mce-PHONE'>
              Telefone <span className='asterisk'>*</span>
            </label>
            <input
              type='text'
              name='PHONE'
              className='required'
              id='mce-PHONE'
            />
          </div>
          <div className='mc-field-group size1of2'>
            <label htmlFor='mce-MMERGE2-month'>
              Data de nascimento <span className='asterisk'>*</span>
            </label>
            <div className='datefield'>
              <span className='subfield dayfield'>
                <input
                  className='datepart required'
                  type='text'
                  pattern='[0-9]*'
                  placeholder='DD'
                  size='2'
                  maxLength='2'
                  name='MMERGE2[day]'
                  id='mce-MMERGE2-day'
                />
              </span>
              /
              <span className='subfield monthfield'>
                <input
                  className='datepart required'
                  type='text'
                  pattern='[0-9]*'
                  placeholder='MM'
                  size='2'
                  maxLength='2'
                  name='MMERGE2[month]'
                  id='mce-MMERGE2-month'
                />
              </span>
              /
              <span className='subfield yearfield'>
                <input
                  className='datepart required'
                  type='text'
                  pattern='[0-9]*'
                  placeholder='AAAA'
                  size='4'
                  maxLength='4'
                  name='MMERGE2[year]'
                  id='mce-MMERGE2-year'
                />
              </span>
              <span className='small-meta nowrap'>( dd / mm / aaaa )</span>
            </div>
          </div>
          <div id='mce-responses' className='clear'>
            <div
              className='response'
              id='mce-error-response'
              style={{ display: "none" }}
            ></div>
            <div
              className='response'
              id='mce-success-response'
              style={{ display: "none" }}
            ></div>
          </div>
          {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
          <div
            style={{ position: "absolute", left: "-5000px" }}
            aria-hidden='true'
          >
            <input
              type='text'
              name='b_ff650aab88a981924261bf120_bfa9dc4749'
              tabIndex='-1'
            />
          </div>
          <div className='clear'>
            <SubscribeButton
              type='submit'
              value='Enviar'
              name='subscribe'
              id='mc-embedded-subscribe'
              className='button'
            />
          </div>
        </div>
      </form>
    </FormContent>
  )
}
