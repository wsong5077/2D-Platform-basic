using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    public float runSpeed;
    private Rigidbody2D myRigidbody;
    private Animator myAnim;
    public float jumpSpeed;
    public float doulbJumpSpeed;
    private BoxCollider2D myFeet;
    private bool isGround;
    private bool canDoubleJump;
    public float attackcdvalue;
    public float attackcd=0;
    // Start is called before the first frame update
    void Start()
    {
        myRigidbody=GetComponent<Rigidbody2D>();
        myAnim=GetComponent<Animator>();
        myFeet = GetComponent<BoxCollider2D>();
    }

    // Update is called once per frame
    void Update()
    {
        Run();
        Flip();
        //Attack();
        Jump();
        CheckGrounded();
        SwitchAnimation();
        
        
    }
    void CheckGrounded()
    {
        isGround = myFeet.IsTouchingLayers(LayerMask.GetMask("Ground"));
    }
    void Flip()
    {
        bool plyerHasXAxisSpeed = Mathf.Abs(myRigidbody.velocity.x)>Mathf.Epsilon;
        if(plyerHasXAxisSpeed)
        {
            if(myRigidbody.velocity.x>0.1f)
            {
                transform.localRotation = Quaternion.Euler(0,0,0);
                //don't need turn
            }
            if(myRigidbody.velocity.x<-0.1f)
            {
                transform.localRotation = Quaternion.Euler(0,180,0);
            }
        }

        
    }

    void Run()
    {
        float moveDir = Input.GetAxis("Horizontal"); //return -1 or 1
        Vector2 playerVel = new Vector2(moveDir * runSpeed, myRigidbody.velocity.y); //x changes, y same
        myRigidbody.velocity=playerVel;
        bool plyerHasXAxisSpeed=Mathf.Abs(myRigidbody.velocity.x) > Mathf.Epsilon;
        myAnim.SetBool("Run",plyerHasXAxisSpeed);
    }
    void Jump() 
    {
        if (Input.GetButtonDown("Jump"))
        {
            if(isGround)
            {
                myAnim.SetBool("Jump",true);

                Vector2 jumpVel = new Vector2(0.0f, jumpSpeed);
                myRigidbody.velocity=Vector2.up*jumpVel;
                canDoubleJump=true;
            }
            else
            {
                if (canDoubleJump)
                {
                    myAnim.SetBool("DoubleJump",true);

                    Vector2 doubleJumpVel = new Vector2(0.0f, doulbJumpSpeed);
                    myRigidbody.velocity=Vector2.up*doubleJumpVel;
                    canDoubleJump=false;
                }
            }
        }
    }
    /*
    void Attack()
    {
        if(Input.GetButtonDown("Attack") && attackcd==0) //cd not frozen
        {
            myAnim.SetTrigger("Attack");
            attackcd=1; 
            StartCoroutine(AttackCD());
        }
    }
    IEnumerator AttackCD()
    {
        yield return new WaitForSeconds(attackcdvalue);
        attackcd=0;
    }
    */

    void SwitchAnimation()
    {
        myAnim.SetBool("Idle",false);
        if (myAnim.GetBool("Jump"))
        {
            if(myRigidbody.velocity.y<0.0f)
            {
                myAnim.SetBool("Jump",false);
                myAnim.SetBool("Fall",true);
            }
        }
        else if(isGround)
        {
            myAnim.SetBool("Fall",false);
            myAnim.SetBool("Idle",true);

        }
        if (myAnim.GetBool("DoubleJump"))
        {
            if(myRigidbody.velocity.y<0.0f)
            {
                myAnim.SetBool("DoubleJump",false);
                myAnim.SetBool("DoubleFall",true);
            }
        }
        else if(isGround)
        {
            myAnim.SetBool("DoubleFall",false);
            myAnim.SetBool("Idle",true);

        }
    }    

  

}
